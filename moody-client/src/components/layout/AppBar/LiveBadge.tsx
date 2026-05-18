import "./LiveBadge.css";

const STATUS_CONFIG = {
    live:    { label: 'Live Edit', dotColor: '#3fdb6e', pulse: true  },
    saving:  { label: 'Saving…',  dotColor: '#ff9500', pulse: true  },
    offline: { label: 'Offline',  dotColor: '#ff5050', pulse: false },
}

export default function LiveBadge({ status = 'live' }) {
    const { label, dotColor, pulse } = STATUS_CONFIG[status]
    return (
        <button className="live-badge" aria-label={`${label} mode`}>
      <span className="dot" style={{
          background: dotColor,
          animation: pulse ? 'pulse-dot 2s ease-in-out infinite' : 'none'
      }} />
            {label}
        </button>
    )
}
