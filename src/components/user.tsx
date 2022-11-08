import clsx from 'clsx';
import { memo, PropsWithChildren } from 'react';

type UserProps = {
  user: User;
  className?: string;
};

const User = ({ user, className, children }: PropsWithChildren<UserProps>) => {
  return (
    <article className={clsx('flex place-content-between gap-8', className)}>
      <div className="flex gap-2 font-sans font-bold">
        <div className="whitespace-nowrap">
          {user.firstName} {user.lastName}
        </div>
        <div className="font-normal text-primary-800">@{user.username}</div>
      </div>
      {children}
    </article>
  );
};

export default memo(User);
