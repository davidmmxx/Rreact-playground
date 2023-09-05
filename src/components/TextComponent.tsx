type TextProps = {
    text: string,
}

export function TextComponent({text}: TextProps) {
    return (
      <div>{text}</div>
    )
}