import { useState } from "react";
import { useHistory, useParams } from "react-router";
import styles from "./Calendar.module.css";
import { ChevronDown, ChevronLeft, ChevronUp, ChevronRight } from "react-bootstrap-icons";

export default function Calendar() {
  const { year, month, day } = useParams();
  const [show, setShow] = useState(false);

  const [selectYear, setSelectYear] = useState(parseInt(year));
  const [selectMonth, setSelectMonth] = useState(parseInt(month));

  function nextMonth() {
    if (selectMonth === 12) {
      setSelectMonth(1);
      setSelectYear(selectYear + 1);
    } else setSelectMonth(selectMonth + 1);
  }
  function prevMonth() {
    if (selectMonth === 1) {
      setSelectMonth(12);
      setSelectYear(selectYear - 1);
    } else setSelectMonth(selectMonth - 1);
  }

  function toggleShow() {
    setShow(!show);
  }

  function getMaxDay(year, month) {
    const maxDay = new Date(year, month, 0).getDate();
    return maxDay;
  }

  function getDates(year, month) {
    const firstDay = new Date(year, month - 1, 1);
    const lastDay = new Date(year, month - 1, getMaxDay(year, month));
    const dates = [];
    const result = [];
    let lastIndex = -1;
    for (let i = 0; i < firstDay.getDay(); i++) {
      dates.push({ date: -1, index: i });
      lastIndex = i;
    }
    for (let i = 1; i <= lastDay.getDate(); i++) {
      dates.push({ date: i, index: lastIndex + i });
    }
    while (dates.length % 7 !== 0) {
      dates.push({ date: -1, index: dates[dates.length - 1].index + 1 });
    }
    dates.forEach((item) => {
      if (item.index % 7 === 0) {
        result.push([item]);
      } else {
        result[result.length - 1].push(item);
      }
    });
    return result;
  }

  return (
    <div className={styles.container}>
      <div className={styles.today}>
        <span className={styles.today_text}>{`${year}년 ${month}월 ${day}일`}</span>
        <span className={styles.today_icon} onClick={toggleShow}>
          {show ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </span>
      </div>
      <div className={show ? styles.monthPicker : styles.hide}>
        <span className={styles.today_icon} onClick={prevMonth}>
          <ChevronLeft size={18} />
        </span>
        <span>
          {selectYear}년 {selectMonth}월
        </span>
        <span className={styles.today_icon} onClick={nextMonth}>
          <ChevronRight size={18} />
        </span>
      </div>
      <div className={show ? styles.calendar : styles.hide}>
        <div className={styles.day}>
          <div className={styles.calendar_item} style={{ color: "red" }}>
            일
          </div>
          <div className={styles.calendar_item}>월</div>
          <div className={styles.calendar_item}>화</div>
          <div className={styles.calendar_item}>수</div>
          <div className={styles.calendar_item}>목</div>
          <div className={styles.calendar_item}>금</div>
          <div className={styles.calendar_item} style={{ color: "blue" }}>
            토
          </div>
        </div>
        {getDates(selectYear, selectMonth).map((arr, i) => {
          return (
            <Line
              key={i}
              arr={arr}
              year={selectYear}
              month={selectMonth}
              day={day}
              today={{ year: year, month: month, day: day }}
            />
          );
        })}
      </div>
    </div>
  );
}

function Line({ arr, year, month, day, today }) {
  const history = useHistory();
  function changeDate(year, month, day) {
    history.push(`/${year}/${month}/${day}`);
  }
  return (
    <div className={styles.calendar_item}>
      {arr.map((item) => {
        return (
          <div
            className={styles.calendar_item}
            key={item.index}
            style={
              item.index % 7 === 0
                ? { color: "red" }
                : item.index % 7 === 6
                ? { color: "blue" }
                : {}
            }
          >
            <span onClick={() => changeDate(year, month, item.date)}>
              {item.date === -1 ? "" : item.date}
            </span>
          </div>
        );
      })}
    </div>
  );
}
