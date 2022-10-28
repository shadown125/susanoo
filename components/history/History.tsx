import { FC } from "react";
import HistoryItem from "./HistoryItem";
import { useTranslation } from "next-i18next";

export type history = {
    id: string;
    changeBy: string;
    userId: string;
    changeAt: Date;
    pageId: string;
}[];

const History: FC<{
    history: history | undefined;
}> = ({ history }) => {
    const { t } = useTranslation("common");

    return (
        <div className="history">
            {!history ? (
                <h1 className="headline h5">{t("history")}</h1>
            ) : (
                <>
                    <h1 className="headline h5">{t("history")}</h1>
                    <ul>
                        {history.map((item, index) => (
                            <li key={index}>
                                <HistoryItem id={item.userId} updated={item.changeAt} pageId={item.pageId} />
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
};

export default History;