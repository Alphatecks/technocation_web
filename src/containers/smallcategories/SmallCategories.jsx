import React from 'react'
import "./smallcategories.css"

const SmallCategories = () => {

    const categories = [
        {title: 'Sales'},
        {title: 'HR'},
        {title: 'Drawing'},
        {title: 'Big data'},
        {title: 'Design'},
    ]


  return (
    <div>
        <div className="small_categories-container">
            
            {
                categories.map((category, index) => {

                    return(
                        <label class="small_categories-container_container">
                            <p> {category.title} </p>
                            <div>
                                <input type="checkbox"/>
                                <span class="checkmark"></span>
                            </div>
                            
                        </label>
                    )
                }
            )
            }

            
        </div>
        
    </div>
  )
}

export default SmallCategories