import { useState, useRef, useEffect } from "react";

export function useFastLoadImg(src, onImageChange) {
  const [img, setImg] = useState(null); // { file, url }
  const [showSubmit, setShowSubmit] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [isDefault, setIsDefault] = useState(false);
  const fileInputRef = useRef();

  const isActive = Boolean(img?.url);

  const canvasToBlob = (canvas, type) =>
    new Promise((resolve, reject) =>
      canvas.toBlob((blob) => {
        if (blob) resolve(blob);
        else reject(new Error("Не удалось создать Blob"));
      }, type)
    );

  const resizeImage = async (file, image) => {
    const size = 1024;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, size, size);

    const scale = Math.min(size / image.width, size / image.height);
    const x = (size - image.width * scale) / 2;
    const y = (size - image.height * scale) / 2;
    ctx.drawImage(image, x, y, image.width * scale, image.height * scale);

    const blob = await canvasToBlob(canvas, file.type);
    const resizedFile = new File([blob], file.name, { type: file.type });
    const url = URL.createObjectURL(blob);

    setImg({ file: resizedFile, url });
    setIsDefault(file.name === "default.png");
    setShowSubmit(file.name !== "default.png");
    setConfirmed(false);
  };

  const validateAndResize = (file) => {
    const validTypes = ["image/jpeg", "image/png"];
    const maxSize = 5 * 1024 * 1024;
    if (!file) return;

    if (!validTypes.includes(file.type)) {
      alert("❌ Разрешены только изображения JPEG или PNG.");
      return;
    }

    if (file.size > maxSize) {
      alert("❌ Размер изображения не должен превышать 5 МБ.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const image = new Image();
      image.onload = () => resizeImage(file, image);
      image.onerror = () => alert("❌ Не удалось загрузить изображение.");
      image.src = e.target.result;
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e) => validateAndResize(e.target.files[0]);

  const handleEdit = () => fileInputRef.current?.click();

  const handleDelete = () => {
    setImg(null);
    setShowSubmit(false);
    setConfirmed(false);
    fileInputRef.current.value = "";
  };

  const handleDownload = () => {
    if (!img?.url) return;
    const link = document.createElement("a");
    link.href = img.url;
    link.download = `avatar_${Date.now()}.${img.file.type.split("/")[1]}`;
    link.click();
  };

  const handleSubmitClick = () => {
    if (!img || !img.file || isDefault) {
      alert("❗ Пожалуйста, сначала загрузите изображение профиля!");
      return;
    }
    setShowSubmit(false);
    setConfirmed(true);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      validateAndResize(e.dataTransfer.files[0]);
    } else {
      const url =
        e.dataTransfer.getData("text/uri-list") ||
        e.dataTransfer.getData("text/plain");
      if (url) {
        const image = new Image();
        image.crossOrigin = "anonymous";
        image.onload = () => {
          const file = new File([], "default.png", { type: "image/png" });
          resizeImage(file, image);
        };
        image.onerror = () => alert("❌ Неверная ссылка на изображение.");
        image.src = url;
      }
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragActive(false);
  };

  useEffect(() => {
    if (confirmed && img && onImageChange) {
      onImageChange(img);
    } else if (!confirmed && onImageChange) {
      onImageChange(null);
    }
  }, [img, confirmed, onImageChange]);

  useEffect(() => {
    if (!src) return;
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.onload = () => {
      const file = new File([], "default.png", { type: "image/png" });
      resizeImage(file, image);
    };
    image.src = src;
  }, [src]);

  return {
    img,
    isActive,
    dragActive,
    showSubmit,
    fileInputRef,
    handleFileChange,
    handleEdit,
    handleDelete,
    handleDownload,
    handleSubmitClick,
    handleDrop,
    handleDragOver,
    handleDragLeave,
  };
}
