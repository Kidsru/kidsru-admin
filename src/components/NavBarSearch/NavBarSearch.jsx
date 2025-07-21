import "./NavBarSearch.css"
function NavBarSearch() {
  return (
    <div>

        <div className="NavBarSearch">

            <input type="text" name = 'searchText'/>
            <input type="text" name='searchText' /> 
              
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"
             strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8"></circle>
             <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
             </svg>


        </div>
    </div>
  )
}

export default NavBarSearch