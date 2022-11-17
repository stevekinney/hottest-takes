import clsx from 'clsx';

const User = ({ user, className, children }) => {
  return (
    <article
      className={clsx(
        'flex place-content-between items-start gap-8',
        className,
      )}
    >
      <div className="flex flex-col gap-1 font-sans font-bold">
        <div className="whitespace-nowrap">
          {user.firstName} {user.lastName}
        </div>
        <div className="font-normal text-primary-800">@{user.username}</div>
      </div>
      {children}
    </article>
  );
};

export default User;
