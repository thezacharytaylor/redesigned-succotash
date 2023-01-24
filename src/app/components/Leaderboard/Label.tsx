/* eslint-disable jsx-a11y/anchor-is-valid */

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
      if (player['previousPlayer']) {
        const urlSuffix = player['name']
          .toLowerCase()
          .replace(/[!@#$%^&*._,]/g, '')
          .replace(/\s/g, '-');
        return (
          <>
            <a
              data-rank={index + 1}
              href={`https://kineticcup.com/player/${urlSuffix}`}
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
            </a>
          </>
        );
      } else {
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
      }
    } else {
      return <>{children}</>;
    }
  };

  return <>{buildResult()}</>;
};

export default Label;
