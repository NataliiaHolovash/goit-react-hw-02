export default function Options({ text = 'Click me', onUpdate }) {
    return <button onClick={onUpdate}>{text} </button>
};