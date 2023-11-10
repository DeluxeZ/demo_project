import {ParamGroup} from "./ParamGroup/ParamGroup";
import {ScrollList} from "./ScrollList/ScrollList";
import {ScrollListData} from "../../../model/type";
import styles from './index.module.less';

export const RightContent = (props: {
    currentMenu: string;
}) => {
    const scrollList1: ScrollListData[] = [{
        name: 'test',
        time_delayed: 1,
    }, {
        name: 'test1',
        time_delayed: 2,
    }];
    const scrollList2: ScrollListData[] = [{
        name: 'test',
        time_delayed: 1,
    }, {
        name: 'test1',
        time_delayed: 2,
    }, {
        name: 'test2',
        time_delayed: 3,
    }, {
        name: 'test3',
        time_delayed: 2,
    }, {
        name: 'test4',
        time_delayed: 1,
    }, {
        name: 'test5',
        time_delayed: 2,
    }, {
        name: 'test6',
        time_delayed: 1,
    }, {
        name: 'test7',
        time_delayed: 2,
    }, {
        name: 'test8',
        time_delayed: 2,
    }, {
        name: 'test9',
        time_delayed: 1,
    }, {
        name: 'test10',
        time_delayed: 2,
    }];
    
    if (props.currentMenu === 'menu1') {
        return (
            <ParamGroup />
        );
    }
    console.log(props.currentMenu);
    return (
        <div className={styles['right-content-container']}>
            <div className={styles['scroll-container']}>
                <ScrollList data={scrollList1} />
                <label className={styles['label']}>组件1 静态展示</label>
            </div>
            <div className={styles['scroll-container']}>
                <ScrollList data={scrollList2} />
                <label className={styles['label']}>组件2 滚动</label>
            </div>
            <div className={styles['scroll-container']}>
                <ScrollList data={scrollList2} hoverPause={true}/>
                <label className={styles['label']}>组件2 单步暂停</label>
            </div>
        </div>
    );
}