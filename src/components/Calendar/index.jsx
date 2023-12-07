import { Container } from "./style";
import { Calendar, Whisper, Popover, Badge } from 'rsuite';
import 'rsuite/styles/index.less'
        


function getTodoList(date) {
  const day = date.getDate();

  switch (day) {
    case 10:
      return [
        { time: '10:30 am', title: 'Meeting' },
        { time: '12:00 pm', title: 'Lunch' }
      ];
    case 15:
      return [
        { time: '09:30 pm', title: 'Products Introduction Meeting' },
        { time: '12:30 pm', title: 'Client entertaining' },
        { time: '02:00 pm', title: 'Product design discussion' },
      ];
    default:
      return [];
  }
}



export function Calendary() {
   function renderCell(date) {
    const list = getTodoList(date);
    const displayList = list.filter((item, index) => index < 1);

    if (list.length) {
      const moreCount = list.length - displayList.length;
      const moreItem = (
        <li>
          <Whisper
            placement="top"
            trigger="click"
            speaker={
              <Popover>
                {list.map((item, index) => (
                  <p key={index}>
                    <b>{item.time}</b> - {item.title}
                  </p>
                ))}
              </Popover>
            }
          >
            <a>{moreCount} more</a>
          </Whisper>
        </li>
      );

      return (
        
        <ul className="calendar-todo-list">
          {displayList.map((item, index) => (
            <li key={index}>
              <Badge /> <b>{item.time}</b> - {item.title}
            </li>
          ))}
          {moreCount ? moreItem : null}
        </ul>
      );
    }

    return null;
  }
   

    return(
      
        <Container>
          <style>
        {`
      .rs-calendar-panel:not(.rs-calendar-compact) .rs-calendar-table-row:not(.rs-calendar-table-header-row) .rs-calendar-table-cell-content {
        height: 90px;
      }
      .rs-calendar-table-cell-content {
        display: inline-block;
        font-size: 13px;

      `}
      </style>
            <Calendar bordered renderCell={renderCell} cellClassName={date => (date.getDay() % 1 ? 'rs-calendar-panel:not(.rs-calendar-compact) .rs-calendar-table-row:not(.rs-calendar-table-header-row) .rs-calendar-table-cell-content .rs-calendar-table-cell-content' : undefined)}/>
            
        </Container>
        
    )

}
