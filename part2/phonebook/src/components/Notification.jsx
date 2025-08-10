const Notification = ({message, classNames}) => {
	if (!message)
		return null;
	else
		return <div className={classNames}>{message}</div>;
};

export default Notification;