// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const preToCodeBlock = (preProps: any) => {
  if (
    preProps.children &&
    preProps.children.props &&
    preProps.children.props.mdxType === "code"
  ) {
    const {
      children: code,
      className = "",
      ...props
    } = preProps.children.props;

    const matches = className.match(/language-(?<lang>.*)/);

    return {
      code: code.trim(),
      className,
      language:
        matches && matches.groups && matches.groups.lang
          ? matches.groups.lang
          : "",
      ...props,
    };
  }
};
