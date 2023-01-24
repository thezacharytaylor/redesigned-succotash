const Label = ({
  index,
  player,
  focusedRow,
  rowRefFunc,
  keyUp,
  keyDown,
  children,
  nameCol,
}) => {
  const buildResult = () => {
    if (nameCol) {
      return (
        <div
          data-rank={index + 1}
          role="note"
          onKeyDown={event => keyDown(event)}
          onKeyUp={event => keyUp(event)}
          tabIndex={focusedRow === player ? 0 : -1}
          ref={elementRef => {
            rowRefFunc(elementRef);
          }}
          aria-label={`Rank ${index + 1} ${player['name']} scored ${
            player['score']
          } on ${player['date']}`}
        >
          {children}
        </div>
      );
    } else {
      return <>{children}</>;
    }
  };

  return <>{buildResult()}</>;
};

export default Label;
