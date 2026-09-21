/* @ds-bundle: {"format":4,"namespace":"ScreenTollDesignSystem_002990","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"Chip","sourcePath":"components/actions/Chip.jsx"},{"name":"SegmentedPills","sourcePath":"components/actions/SegmentedPills.jsx"},{"name":"BudgetPill","sourcePath":"components/display/BudgetPill.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"ChannelRow","sourcePath":"components/display/ChannelRow.jsx"},{"name":"CircularTimer","sourcePath":"components/display/CircularTimer.jsx"},{"name":"InfoBanner","sourcePath":"components/display/InfoBanner.jsx"},{"name":"ProgressBar","sourcePath":"components/display/ProgressBar.jsx"},{"name":"StatCard","sourcePath":"components/display/StatCard.jsx"},{"name":"ThumbPlaceholder","sourcePath":"components/display/ThumbPlaceholder.jsx"},{"name":"VideoCard","sourcePath":"components/display/VideoCard.jsx"},{"name":"WeekChart","sourcePath":"components/display/WeekChart.jsx"},{"name":"TextArea","sourcePath":"components/forms/TextArea.jsx"},{"name":"TextField","sourcePath":"components/forms/TextField.jsx"},{"name":"BottomSheet","sourcePath":"components/navigation/BottomSheet.jsx"},{"name":"TabBar","sourcePath":"components/navigation/TabBar.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"52add5881583","components/actions/Chip.jsx":"ab333266d037","components/actions/SegmentedPills.jsx":"31f49486b3a8","components/display/BudgetPill.jsx":"d91088c2dfc8","components/display/Card.jsx":"881ee15e5533","components/display/ChannelRow.jsx":"4fbaa754494d","components/display/CircularTimer.jsx":"e9636dc77c35","components/display/InfoBanner.jsx":"adac5d977666","components/display/ProgressBar.jsx":"d9768189dbf4","components/display/StatCard.jsx":"9e7fac43bd87","components/display/ThumbPlaceholder.jsx":"6b2e52bcd224","components/display/VideoCard.jsx":"7d1f55676db7","components/display/WeekChart.jsx":"2e73cf1bfbb5","components/forms/TextArea.jsx":"d30b41cde719","components/forms/TextField.jsx":"b5c9b7244681","components/navigation/BottomSheet.jsx":"53fd17aed4f7","components/navigation/TabBar.jsx":"e7885b78c4e5"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ScreenTollDesignSystem_002990 = window.ScreenTollDesignSystem_002990 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function Button({
  variant = 'primary',
  shape = 'pill',
  size = 'md',
  block = false,
  disabled = false,
  onClick,
  style,
  children
}) {
  const [hover, setHover] = React.useState(false);
  const pad = {
    sm: '7px 14px',
    md: '9px 18px',
    lg: '13px 18px'
  }[size];
  const fs = size === 'sm' ? 13 : 14;
  const radius = shape === 'pill' ? 'var(--r-pill)' : shape === 'rounded-sm' ? 'var(--r-btn)' : 'var(--r-field)';
  const base = {
    display: block ? 'block' : 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: pad,
    borderRadius: radius,
    fontFamily: 'var(--font-body)',
    whiteSpace: 'nowrap',
    flexShrink: 0,
    fontSize: fs,
    fontWeight: 800,
    cursor: disabled ? 'default' : 'pointer',
    userSelect: 'none',
    opacity: disabled ? 'var(--opacity-disabled)' : 1,
    transition: 'background 0.15s, color 0.15s'
  };
  const looks = {
    primary: {
      background: hover && !disabled ? 'var(--accent-hover)' : 'var(--accent)',
      color: 'var(--text-on-accent)'
    },
    go: {
      background: 'var(--go)',
      color: 'var(--text-on-accent)'
    },
    secondary: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-soft)',
      color: hover && !disabled ? 'var(--text-strong)' : 'var(--text-muted)'
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...base,
      ...looks[variant],
      ...style
    },
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/Chip.jsx
try { (() => {
function Chip({
  label,
  selected = false,
  onClick,
  shadow = false,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      display: 'inline-flex',
      padding: '9px 16px',
      borderRadius: 'var(--r-pill)',
      whiteSpace: 'nowrap',
      background: selected ? 'var(--go)' : 'var(--surface-card)',
      color: selected ? 'var(--text-on-accent)' : 'var(--text-strong)',
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 700,
      boxShadow: shadow ? 'var(--shadow-chip)' : 'none',
      cursor: onClick ? 'pointer' : 'default',
      userSelect: 'none',
      transition: 'background 0.15s, color 0.15s',
      ...style
    }
  }, label);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Chip.jsx", error: String((e && e.message) || e) }); }

// components/actions/SegmentedPills.jsx
try { (() => {
function SegmentedPills({
  options = [],
  value,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      ...style
    }
  }, options.map(o => {
    const on = o.value === value;
    return /*#__PURE__*/React.createElement("div", {
      key: String(o.value),
      onClick: () => onChange && onChange(o.value),
      style: {
        padding: '7px 16px',
        borderRadius: 'var(--r-pill)',
        background: on ? 'var(--accent)' : 'var(--surface-card)',
        color: on ? 'var(--text-on-accent)' : 'var(--text-muted)',
        fontFamily: 'var(--font-body)',
        fontSize: 13,
        fontWeight: 800,
        cursor: 'pointer',
        userSelect: 'none',
        transition: 'background 0.15s, color 0.15s'
      }
    }, o.label);
  }));
}
Object.assign(__ds_scope, { SegmentedPills });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/SegmentedPills.jsx", error: String((e && e.message) || e) }); }

// components/display/BudgetPill.jsx
try { (() => {
function BudgetPill({
  label,
  tone = 'go',
  style
}) {
  const dots = {
    go: 'var(--go)',
    accent: 'var(--accent)',
    calm: 'var(--calm)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '8px 14px',
      background: 'var(--surface-card)',
      borderRadius: 'var(--r-pill)',
      boxShadow: 'var(--shadow-rest)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: dots[tone] || dots.go
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 800,
      color: 'var(--text-strong)',
      whiteSpace: 'nowrap'
    }
  }, label));
}
Object.assign(__ds_scope, { BudgetPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/BudgetPill.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function Card({
  radius = 22,
  padding = 18,
  shadow = 'card',
  style,
  children
}) {
  const shadows = {
    card: 'var(--shadow-card)',
    rest: 'var(--shadow-rest)',
    panel: 'var(--shadow-panel)',
    none: 'none'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderRadius: radius,
      padding,
      boxShadow: shadows[shadow] || shadows.card,
      boxSizing: 'border-box',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/ChannelRow.jsx
try { (() => {
function ChannelRow({
  name,
  topic,
  link,
  onRemove,
  secondaryLabel,
  onSecondary,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      background: 'var(--surface-card)',
      borderRadius: 18,
      padding: '14px 16px',
      boxShadow: 'var(--shadow-rest)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: '50%',
      background: 'var(--surface-thumb)',
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      fontWeight: 800,
      color: 'var(--text-faint)',
      textTransform: 'uppercase'
    }
  }, (String(name || '?').replace(/^@/, '') || '?').charAt(0)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      minWidth: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      fontWeight: 800,
      color: 'var(--text-strong)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--text-muted)',
      fontWeight: 600,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, topic), link && /*#__PURE__*/React.createElement("a", {
    href: link,
    target: "_blank",
    rel: "noreferrer",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      fontWeight: 700,
      color: 'var(--accent-text)',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: 'block'
    }
  }, link.replace(/^https?:\/\/(www\.)?/, ''), " \u2197"), secondaryLabel && /*#__PURE__*/React.createElement("div", {
    onClick: onSecondary,
    style: {
      alignSelf: 'flex-start',
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      fontWeight: 800,
      color: 'var(--text-faint)',
      cursor: 'pointer',
      textDecoration: 'underline',
      textUnderlineOffset: 3,
      whiteSpace: 'nowrap'
    }
  }, secondaryLabel)), onRemove && /*#__PURE__*/React.createElement("div", {
    onClick: onRemove,
    style: {
      flexShrink: 0,
      width: 28,
      height: 28,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 800,
      color: 'var(--text-faint)',
      cursor: 'pointer'
    }
  }, "\u2715"));
}
Object.assign(__ds_scope, { ChannelRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/ChannelRow.jsx", error: String((e && e.message) || e) }); }

// components/display/CircularTimer.jsx
try { (() => {
function CircularTimer({
  progress = 0,
  label,
  sublabel,
  size = 170,
  tone = 'calm',
  style
}) {
  const deg = Math.max(0, Math.min(1, progress)) * 360;
  const ring = tone === 'accent' ? 'var(--accent)' : 'var(--calm)';
  const track = tone === 'accent' ? 'var(--accent-tint)' : 'var(--calm-track)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: size,
      height: size,
      borderRadius: '50%',
      background: 'conic-gradient(' + ring + ' ' + deg + 'deg, ' + track + ' ' + deg + 'deg)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: size - 36,
      height: size - 36,
      borderRadius: '50%',
      background: 'var(--surface-card)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 34,
      fontWeight: 800,
      color: 'var(--text-strong)'
    }
  }, label), sublabel && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      fontWeight: 700,
      color: 'var(--text-muted)'
    }
  }, sublabel)));
}
Object.assign(__ds_scope, { CircularTimer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/CircularTimer.jsx", error: String((e && e.message) || e) }); }

// components/display/InfoBanner.jsx
try { (() => {
function InfoBanner({
  children,
  tone = 'calm',
  dot = true,
  align = 'left',
  style
}) {
  const tones = {
    calm: {
      bg: 'var(--calm-tint)',
      dot: 'var(--calm)',
      text: 'var(--calm-text-deep)'
    },
    accent: {
      bg: 'var(--accent-tint)',
      dot: 'var(--accent)',
      text: 'var(--accent-text-deep)'
    }
  };
  const t = tones[tone] || tones.calm;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: dot ? '14px 18px' : '12px 16px',
      background: t.bg,
      borderRadius: dot ? 18 : 14,
      justifyContent: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 22,
      height: 22,
      borderRadius: '50%',
      background: t.dot,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 700,
      color: t.text,
      lineHeight: 1.4
    }
  }, children));
}
Object.assign(__ds_scope, { InfoBanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/InfoBanner.jsx", error: String((e && e.message) || e) }); }

// components/display/ProgressBar.jsx
try { (() => {
function ProgressBar({
  value = 0,
  tone = 'accent',
  style
}) {
  const fills = {
    accent: 'var(--accent)',
    go: 'var(--go)',
    calm: 'var(--calm)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      background: 'var(--track)',
      borderRadius: 'var(--r-pill)',
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      background: fills[tone] || fills.accent,
      borderRadius: 'var(--r-pill)',
      width: Math.max(0, Math.min(100, value)) + '%',
      transition: 'width 0.3s'
    }
  }));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/display/StatCard.jsx
try { (() => {
function StatCard({
  value,
  label,
  tone = 'neutral',
  style
}) {
  const colors = {
    neutral: 'var(--text-strong)',
    accent: 'var(--accent-text)',
    go: 'var(--go-text)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: 'var(--surface-card)',
      borderRadius: 18,
      padding: 16,
      boxShadow: 'var(--shadow-rest)',
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      boxSizing: 'border-box',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 24,
      fontWeight: 800,
      color: colors[tone] || colors.neutral
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      fontWeight: 700,
      color: 'var(--text-muted)'
    }
  }, label));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/display/ThumbPlaceholder.jsx
try { (() => {
function ThumbPlaceholder({
  width = 342,
  height = 150,
  dark = false,
  label = 'video thumbnail'
}) {
  const bg = dark ? 'var(--surface-player)' : 'var(--surface-thumb)';
  const line = dark ? 'var(--surface-player-line)' : 'var(--surface-thumb-line)';
  const txt = dark ? 'var(--text-faint-warm)' : 'var(--text-faint)';
  const rows = [];
  for (let y = Math.round(height * 0.12); y < height; y += Math.round(height * 0.24)) rows.push(y);
  return /*#__PURE__*/React.createElement("svg", {
    width: width,
    height: height,
    viewBox: '0 0 ' + width + ' ' + height,
    style: {
      display: 'block',
      width: '100%',
      height: 'auto'
    }
  }, /*#__PURE__*/React.createElement("rect", {
    width: width,
    height: height,
    fill: bg
  }), rows.map(y => /*#__PURE__*/React.createElement("rect", {
    key: y,
    y: y,
    width: width,
    height: 6,
    fill: line
  })), /*#__PURE__*/React.createElement("text", {
    x: width / 2,
    y: height / 2 + 5,
    textAnchor: "middle",
    fontFamily: "monospace",
    fontSize: "12",
    fill: txt
  }, label));
}
Object.assign(__ds_scope, { ThumbPlaceholder });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/ThumbPlaceholder.jsx", error: String((e && e.message) || e) }); }

// components/display/VideoCard.jsx
try { (() => {
function VideoCard({
  title,
  channel,
  costLabel,
  link,
  badge,
  thumb,
  actionLabel = 'Watch',
  onAction,
  secondaryLabel,
  onSecondary,
  tertiaryLabel,
  onTertiary,
  actions,
  style
}) {
  const acts = actions || [tertiaryLabel && {
    label: tertiaryLabel,
    onClick: onTertiary,
    faint: true
  }, secondaryLabel && {
    label: secondaryLabel,
    onClick: onSecondary
  }].filter(Boolean);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderRadius: 22,
      overflow: 'hidden',
      boxShadow: 'var(--shadow-card)',
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, thumb ? /*#__PURE__*/React.createElement("img", {
    src: thumb,
    alt: "",
    style: {
      width: '100%',
      height: 180,
      objectFit: 'cover',
      display: 'block',
      background: 'var(--surface-thumb)'
    }
  }) : /*#__PURE__*/React.createElement(__ds_scope.ThumbPlaceholder, null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 18px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, badge && /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: 'flex-start',
      padding: '3px 10px',
      background: 'var(--accent-tint)',
      borderRadius: 999,
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      fontWeight: 800,
      color: 'var(--accent-text-deep)',
      letterSpacing: '0.02em'
    }
  }, badge), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      fontWeight: 800,
      color: 'var(--text-strong)',
      lineHeight: 1.3
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--text-muted)',
      fontWeight: 700
    }
  }, channel), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--text-muted)',
      fontWeight: 600
    }
  }, costLabel), link && /*#__PURE__*/React.createElement("a", {
    href: link,
    target: "_blank",
    rel: "noreferrer",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      fontWeight: 700,
      color: 'var(--accent-text)',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      maxWidth: 200,
      display: 'block'
    }
  }, link.replace(/^https?:\/\/(www\.)?/, ''), " \u2197")), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    onClick: onAction
  }, actionLabel)), acts.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      flexWrap: 'wrap',
      gap: 14
    }
  }, acts.map(a => /*#__PURE__*/React.createElement("div", {
    key: a.label,
    onClick: a.onClick,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      fontWeight: 800,
      color: a.faint ? 'var(--text-faint)' : 'var(--text-muted)',
      cursor: 'pointer',
      textDecoration: 'underline',
      textUnderlineOffset: 3
    }
  }, a.label)))));
}
Object.assign(__ds_scope, { VideoCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/VideoCard.jsx", error: String((e && e.message) || e) }); }

// components/display/WeekChart.jsx
try { (() => {
function WeekChart({
  title = 'Minutes watched',
  days = [],
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderRadius: 22,
      padding: '20px 18px 14px',
      boxShadow: 'var(--shadow-card)',
      boxSizing: 'border-box',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 800,
      color: 'var(--text-strong)',
      marginBottom: 14
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 10,
      height: 100
    }
  }, days.map(d => /*#__PURE__*/React.createElement("div", {
    key: d.label,
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      fontWeight: 700,
      color: 'var(--text-muted)'
    }
  }, d.minutes), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      borderRadius: '8px 8px 4px 4px',
      background: d.active ? 'var(--accent)' : 'var(--border-soft)',
      height: Math.max(4, Math.round(d.minutes * 1.1))
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      fontWeight: 700,
      color: 'var(--text-muted)'
    }
  }, d.label)))));
}
Object.assign(__ds_scope, { WeekChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/WeekChart.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextArea.jsx
try { (() => {
function TextArea({
  value,
  onChange,
  placeholder,
  height = 56,
  radius = 14,
  style
}) {
  return /*#__PURE__*/React.createElement("textarea", {
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    style: {
      border: '1px solid var(--border-soft)',
      background: 'var(--surface-card)',
      borderRadius: radius,
      padding: radius === 14 ? '12px 14px' : '10px 12px',
      fontFamily: 'var(--font-body)',
      fontSize: radius === 14 ? 14 : 13,
      fontWeight: 600,
      color: 'var(--text-strong)',
      resize: 'none',
      height,
      outline: 'none',
      boxSizing: 'border-box',
      ...style
    }
  });
}
Object.assign(__ds_scope, { TextArea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextArea.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextField.jsx
try { (() => {
function TextField({
  value,
  onChange,
  placeholder,
  type,
  autoComplete,
  onKeyDown,
  style
}) {
  return /*#__PURE__*/React.createElement("input", {
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    type: type || 'text',
    autoComplete: autoComplete,
    onKeyDown: onKeyDown,
    style: {
      border: '1px solid var(--border-soft)',
      background: 'var(--surface-card)',
      borderRadius: 'var(--r-field)',
      padding: '12px 14px',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-strong)',
      outline: 'none',
      boxSizing: 'border-box',
      ...style
    }
  });
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextField.jsx", error: String((e && e.message) || e) }); }

// components/navigation/BottomSheet.jsx
try { (() => {
function BottomSheet({
  open,
  onScrimClick,
  children,
  frameRadius = 32
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onScrimClick,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim)',
      display: 'flex',
      alignItems: 'flex-end',
      borderRadius: frameRadius,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      background: 'var(--surface-app)',
      borderRadius: '28px 28px ' + frameRadius + 'px ' + frameRadius + 'px',
      padding: '24px 24px 28px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      boxSizing: 'border-box'
    }
  }, children));
}
Object.assign(__ds_scope, { BottomSheet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/BottomSheet.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TabBar.jsx
try { (() => {
function TabBar({
  items = [],
  active,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-around',
      padding: '14px 24px 26px',
      background: 'var(--surface-card)',
      borderTop: '1px solid var(--border-hairline)',
      ...style
    }
  }, items.map(it => {
    const on = it.key === active;
    return /*#__PURE__*/React.createElement("div", {
      key: it.key,
      onClick: () => onChange && onChange(it.key),
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3,
        minWidth: 64,
        cursor: 'pointer',
        userSelect: 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 26,
        height: 26,
        borderRadius: 'var(--r-tabicon)',
        background: on ? 'var(--accent)' : 'var(--border-soft)',
        transition: 'background 0.15s'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 12,
        fontWeight: 800,
        color: on ? 'var(--text-strong)' : 'var(--text-muted)'
      }
    }, it.label));
  }));
}
Object.assign(__ds_scope, { TabBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TabBar.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.SegmentedPills = __ds_scope.SegmentedPills;

__ds_ns.BudgetPill = __ds_scope.BudgetPill;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ChannelRow = __ds_scope.ChannelRow;

__ds_ns.CircularTimer = __ds_scope.CircularTimer;

__ds_ns.InfoBanner = __ds_scope.InfoBanner;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.ThumbPlaceholder = __ds_scope.ThumbPlaceholder;

__ds_ns.VideoCard = __ds_scope.VideoCard;

__ds_ns.WeekChart = __ds_scope.WeekChart;

__ds_ns.TextArea = __ds_scope.TextArea;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.BottomSheet = __ds_scope.BottomSheet;

__ds_ns.TabBar = __ds_scope.TabBar;

})();
