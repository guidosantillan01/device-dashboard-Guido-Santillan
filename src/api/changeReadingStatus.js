const changeReadingStatus = async (readingName, newStatus) => {
    const res = await fetch(
        `http://127.0.0.1:8888/devices/${readingName}?active=${newStatus}`,
        { method: 'PATCH' },
    );
    return res;
};

export default changeReadingStatus;
