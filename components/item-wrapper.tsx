import React, { ReactNode } from "react";
import { View } from "react-native";

interface ItemWrapperProps {
  index: number;
  children: ReactNode;
}

export function ItemWrapper({ index, children }: ItemWrapperProps) {
  if (index % 2 === 0)
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 10,
          paddingVertical: 5,
          backgroundColor: "#f1faee",
          marginHorizontal: 24,
          borderRadius: 10,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 0.5,
          },
          shadowOpacity: 0.1,
        }}
      >
        {children}
      </View>
    );

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#edf2f4",
        marginBottom: 10,
        paddingVertical: 5,
        marginHorizontal: 24,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 0.5,
        },
        shadowOpacity: 0.1,
      }}
    >
      {children}
    </View>
  );
}
