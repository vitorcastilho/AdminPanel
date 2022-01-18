import React from 'react'
import './widgetLg.css'

export default function WidgetLg() {

    const Button = ({type}) => {
        return <button className={"widgetLgButton " + type}>{type}</button>
    }
    return (
      <div className="widgetLg">
        <h3 className="widgetLgTitle">Latest Trasactions</h3>
        <table className="widgetLgTable">
          <tbody>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>

          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://media-exp1.licdn.com/dms/image/C4D03AQEfw-oJUnmERw/profile-displayphoto-shrink_200_200/0/1630189966113?e=1647475200&v=beta&t=kyPiThTWcUzWJ_LXidL7RsBOvdDtrDFod1I5fEM-JMk"
                alt=""
                className="widgetLgImg"
                />
              <span className="widgetLgName">Vitor Castilho</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://media-exp1.licdn.com/dms/image/C4D03AQEfw-oJUnmERw/profile-displayphoto-shrink_200_200/0/1630189966113?e=1647475200&v=beta&t=kyPiThTWcUzWJ_LXidL7RsBOvdDtrDFod1I5fEM-JMk"
                alt=""
                className="widgetLgImg"
                />
              <span className="widgetLgName">Vitor Castilho</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Declined" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://media-exp1.licdn.com/dms/image/C4D03AQEfw-oJUnmERw/profile-displayphoto-shrink_200_200/0/1630189966113?e=1647475200&v=beta&t=kyPiThTWcUzWJ_LXidL7RsBOvdDtrDFod1I5fEM-JMk"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Vitor Castilho</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Pending" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://media-exp1.licdn.com/dms/image/C4D03AQEfw-oJUnmERw/profile-displayphoto-shrink_200_200/0/1630189966113?e=1647475200&v=beta&t=kyPiThTWcUzWJ_LXidL7RsBOvdDtrDFod1I5fEM-JMk"
                alt=""
                className="widgetLgImg"
                />
              <span className="widgetLgName">Vitor Castilho</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://media-exp1.licdn.com/dms/image/C4D03AQEfw-oJUnmERw/profile-displayphoto-shrink_200_200/0/1630189966113?e=1647475200&v=beta&t=kyPiThTWcUzWJ_LXidL7RsBOvdDtrDFod1I5fEM-JMk"
                alt=""
                className="widgetLgImg"
                />
              <span className="widgetLgName">Vitor Castilho</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Declined" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://media-exp1.licdn.com/dms/image/C4D03AQEfw-oJUnmERw/profile-displayphoto-shrink_200_200/0/1630189966113?e=1647475200&v=beta&t=kyPiThTWcUzWJ_LXidL7RsBOvdDtrDFod1I5fEM-JMk"
                alt=""
                className="widgetLgImg"
                />
              <span className="widgetLgName">Vitor Castilho</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Pending" />
            </td>
          </tr>
                </tbody>
        </table>
      </div>
    );
}
