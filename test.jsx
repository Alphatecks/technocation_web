import { useState } from 'react';
import { FaRegBookmark } from 'react-icons/fa';

const MyComponent = () => {
    const initialData = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
        // Add more items as needed
    ];

    const [items, setItems] = useState(initialData);

    const handleItemClick = (id) => {
        setItems(prevItems => 
            prevItems.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        isActive: !item.isActive // Toggle isActive property
                    };
                }
                return item;
            })
        );
    };

    return (
        <div>
            {items.map(item => (
                <div
                    key={item.id}
                    className={`item ${item.isActive ? 'active' : ''}`}
                    onClick={() => handleItemClick(item.id)}
                >
                    <FaRegBookmark className="icon" />
                    <span>{item.name}</span>
                </div>
            ))}
        </div>
    );
};

export default MyComponent;