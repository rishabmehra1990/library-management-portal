import { useEffect, useState, useRef, useCallback } from "react";

const OnScrollPagination = ({ InventoryData, columns, rowRenderer, LIMIT }) => {
    const [data, setData] = useState([]);
    const [displayedData, setDisplayedData] = useState([]);
    const [offset, setOffset] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const observer = useRef();

    const lastRowRef = useCallback(
        (node) => {
            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && hasMore) {
                    setOffset((prev) => prev + LIMIT);
                }
            });
            if (node) observer.current.observe(node);
        },
        [hasMore]
    );

    useEffect(() => {
        const load = async () => {
            const result = await InventoryData();
            if (result) {
                setData(result);
                setDisplayedData(result.slice(0, LIMIT));
                if (LIMIT >= result.length) setHasMore(false);
            }
        };
        load();
    }, [InventoryData]);

    useEffect(() => {
        if (offset === 0) return;
        const newItems = data.slice(offset, offset + LIMIT);
        setDisplayedData((prev) => [...prev, ...newItems]);
        if (offset + LIMIT >= data.length) {
            setHasMore(false);
        }
    }, [offset, data]);

    return (
        <>
            <table className="books-table">
                <thead>
                    <tr>
                        {columns.map((col) => (
                            <th key={col.key}>{col.header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {displayedData.map((item, index) =>
                        rowRenderer(item, index === displayedData.length - 1 ? lastRowRef : null)
                    )}
                </tbody>
            </table>

            {!hasMore && (
                <p style={{ textAlign: "center", marginTop: "1rem" }}>
                    No more records to load.
                </p>
            )}
        </>
    );
};

export default OnScrollPagination;
