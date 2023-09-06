import { useState } from "react";

export function PackingList({ items, onRemoveItems, onPackedItems, onClearItems }) {

    const [sortBy, setSortBy] = useState('input');
    let sortedItems;

    if (sortBy === 'input') sortedItems = items;

    if (sortBy === 'description') {
        sortedItems = items
            .slice()
            .sort((a, b) => a.description.localeCompare(b.description));
    }

    if (sortBy === 'packed')
        sortedItems = items
            .slice()
            .sort((a, b) => Number(a.packed) - Number(b.packed));



    return <div className="list">
        <ul>
            {sortedItems.map(item => <Item item={item} key={item.id} onRemoveItems={onRemoveItems} onPackedItems={onPackedItems} />)}
        </ul>
        <div className="actions">
            <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
                <option value="input">Sort by input order</option>
                <option value="description">Sort by description</option>
                <option value="packed">Sort by packed status</option>
            </select>

            {items.length ? (
                <button onClick={() => onClearItems()}>
                    Clear list
                </button>
            ) : null}
        </div>
    </div>;

}
function Item({ item, onRemoveItems, onPackedItems }) {
    return <li>
        <input type="checkbox" value={item.packed} onChange={() => onPackedItems(item.id)} />
        <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
            {item.quantity} {item.description}
        </span>
        <button onClick={() => onRemoveItems(item.id)}>❌</button>
    </li>;
}
