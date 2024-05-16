import { useState } from 'react';
import { FaRegBookmark } from 'react-icons/fa';

const Test = () => {
    const initialData = [
        { id: 1, name: 'Item 1', isActive: false },
        { id: 2, name: 'Item 2', isActive: false },
        { id: 3, name: 'Item 3', isActive: false },
        // Add more items as needed
    ];

    const [items, setItems] = useState(initialData);

    const handleItemClick = (id) => {
        setItems(prevItems => 
            prevItems.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        isActive: !item.isActive 
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
                    <FaRegBookmark className="icon" style={{ color: item.isActive ? 'red' : 'gray' }} />
                    <span>{item.name}</span>
                </div>
            ))}
        </div>
    );
};

export default Test;
