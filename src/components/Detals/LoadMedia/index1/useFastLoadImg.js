import { useState, useRef, useEffect } from "react";
import { apiConnector } from "../../../../services/apiconnector";
import { endpoints } from "../../../../services/api";

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const resizeImage = (file, size = 1024) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const reader = new FileReader();

    reader.onload = (e) => {
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        canvas.width = size;
        canvas.height = size;
        ctx.clearRect(0, 0, size, size);

        const ratio = Math.min(size / img.width, size / img.height);
        const newWidth = img.width * ratio;
        const newHeight = img.height * ratio;
        const offsetX = (size - newWidth) / 2;
        const offsetY = (size - newHeight) / 2;

        ctx.drawImage(img, offsetX, offsetY, newWidth, newHeight);

        canvas.toBlob(
          (blob) => {
            if (!blob) return reject("Ошибка получения blob с canvas");
            const resized = new File([blob], file.name, {
              type: "image/png",
              lastModified: Date.now(),
            });
            resolve(resized);
          },
          "image/png",
          1
        );
      };

      img.onerror = reject;
      img.src = e.target.result;
    };

    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

export const useFastLoadImg = (initialSrc, onImageChange) => {
  const [img, setImg] = useState(
    initialSrc ? { url: initialSrc, file: null } : null
  );
  const [isActive, setIsActive] = useState(!!initialSrc);
  const [dragActive, setDragActive] = useState(false);
  const [showSubmit, setShowSubmit] = useState(false);
  const [confirmed, setConfirmed] = useState(!!initialSrc);
  const [loading, setLoading] = useState(false);

  const fileInputRef = useRef(null);

  const loadImage = async (file) => {
    if (file.size > MAX_FILE_SIZE) {
      alert(
        `❌ Размер файла не должен превышать 5MB. Загружено: ${(
          file.size /
          1024 /
          1024
        ).toFixed(2)}MB`
      );
      return;
    }

    try {
      const resized = await resizeImage(file);
      const url = URL.createObjectURL(resized);
      setImg({ url, file: resized });
      setIsActive(true);
      setShowSubmit(true);
      setConfirmed(false);
    } catch (err) {
      console.error("❌ Ошибка ресайза:", err);
      alert("Произошла ошибка при изменении размера изображения.");
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) loadImage(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) loadImage(file);
  };

  const handleSubmitClick = async () => {
    if (!img?.file) {
      alert("Пожалуйста, загрузите изображение.");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("file", img.file);

      const res = await apiConnector("POST", endpoints.MEDIA_UPLOAD, formData, {
        "Content-Type": "multipart/form-data",
      });

      const result = res.data;
      onImageChange(result);
      setShowSubmit(false);
      setConfirmed(true);
    } catch (err) {
      console.error("❌ Ошибка при загрузке:", err);
      alert(
        "Ошибка при загрузке: " + (err?.response?.data?.message || err.message)
      );
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = () => {
    fileInputRef.current?.click();
  };

  const handleDelete = () => {
    setImg(null);
    setIsActive(false);
    setConfirmed(false);
    setShowSubmit(true);
  };

  const handleDownload = () => {
    if (img?.url) {
      const link = document.createElement("a");
      link.href = img.url;
      const randomId = Math.floor(10000000 + Math.random() * 90000000);
      link.download = `image_${randomId}.png`;
      link.click();
    }
  };

  return {
    img,
    isActive,
    dragActive,
    showSubmit,
    loading,
    fileInputRef,
    handleFileChange,
    handleEdit,
    handleDelete,
    handleDownload,
    handleSubmitClick,
    handleDrop,
    handleDragOver: (e) => {
      e.preventDefault();
      setDragActive(true);
    },
    handleDragLeave: () => setDragActive(false),
  };
};
