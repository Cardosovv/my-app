import { Stack } from "expo-router";

export default function Layout() {
    const backgroundColor = "gray"
    return (
        <Stack screenOptions={
            {headerShown: false, contentStyle: { backgroundColor}}
        }></Stack>
    )
}