import { AnimatedCircularProgress } from "react-native-circular-progress";

export function ProgressRing({
    size = 140,
    strokeWidth = 10,
    value = 0,
    color = "#3498db",
    backgroundColor = "#ecf0f1",
    children
}){
    return (
        <AnimatedCircularProgress
            size={size}
            width={strokeWidth}
            fill={value}
            tintColor={color}
            backgroundColor={backgroundColor}
            rotation={0}
            lineCap="round"
        >
            {children}
        </AnimatedCircularProgress>
    )
}