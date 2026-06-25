const styles = {
  Done:          "bg-green-100 text-green-700",
  Completed:     "bg-green-100 text-green-700",
  Ready:         "bg-blue-100 text-blue-700",
  Waiting:       "bg-yellow-100 text-yellow-700",
  Pending:       "bg-orange-100 text-orange-700",
  Critical:      "bg-red-100 text-red-700",
  Urgent:        "bg-red-100 text-red-700",
  Normal:        "bg-gray-100 text-gray-600",
  "In Progress": "bg-purple-100 text-purple-700",
}

function StatusBadge({ status }) {
  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${styles[status] || "bg-gray-100 text-gray-600"}`}>
      {status}
    </span>
  )
}

export default StatusBadge