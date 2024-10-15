import { SortKey } from "../../types";
import {ReactComponent as SortIcon} from "../../components/icons/sort.svg";

export const Sort = ({sortKey, onSort}: {sortKey:SortKey; onSort: () => void}) => {
    return(
        <div className={`app-sort ${sortKey === SortKey.DESC ? 'app-sort_desc' : ''}`} onClick={onSort}>
            <SortIcon/>
        </div>
    )
};
