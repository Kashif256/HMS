function StatsCard({ icon, label, value, sub, subColor = "text-green-500", trend }) {
  return (
    <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm flex items-center gap-4">
      
      {/* Icon */}
      {icon && (
        <div className="text-2xl shrink-0">{icon}</div>
      )}

      {/* Content */}
      <div className="min-w-0">
        <p className="text-xs text-gray-400 uppercase tracking-wide font-medium mb-1">
          {label}
        </p>
        <p className="text-2xl font-bold text-gray-800 leading-none">
          {value}
        </p>
        {sub && (
          <p className={`text-xs mt-1 ${subColor}`}>
            {trend === "up" && "↗ "}
            {trend === "down" && "↘ "}
            {sub}
          </p>
        )}
      </div>
    </div>
  )
}

export default StatsCard