export default function Controls({ onAdd, onDelete, onUndo, onRedo }) {
  return (
    <div className="border-t p-4 flex justify-between">
      <div className="space-x-2">
        <button onClick={onAdd} className="bg-blue-500 text-white px-4 py-2 rounded">Add Slide</button>
        <button onClick={onDelete} className="bg-red-500 text-white px-4 py-2 rounded">Delete Slide</button>
      </div>
      <div className="space-x-2">
        <button onClick={onUndo} className="bg-gray-500 text-white px-4 py-2 rounded">Undo</button>
        <button onClick={onRedo} className="bg-gray-500 text-white px-4 py-2 rounded">Redo</button>
      </div>
    </div>
  )
}
