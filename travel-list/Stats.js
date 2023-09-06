export function Stats({ items }) {
    if (!items.length)
        return (
            <p className="stats"><em>Start adding some items to your packing list🛍️</em></p>
        );

    const itemsCount = items.length;
    const packedItems = items.filter((item) => item.packed).length;
    const percentage = Math.round(packedItems / itemsCount * 100);


    return <footer className="stats">
        <em>{percentage === 100 ?
            "You got everything ready to go!✈️🌍"
            : `💼You have ${itemsCount} items on your list, and you already packed ${packedItems} (${percentage}%)`}</em>
    </footer>;
}
