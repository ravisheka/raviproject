import React from 'react'
import "./qualification.css"
function Qualification() {
  return (
    <div className='container'>
    <h3>Educational Qualifications</h3>
            <table>
                <tr id="heading">
                    <th>Qualification</th>
                    <th>Board</th>
                    <th>Percentage / Grades</th>
                    <th>Year</th>
                </tr>
                <tr>
                    <td>10TH</td>
                    <td>UP Board</td>
                    <td>77.7%</td>
                    <td>2013</td>
                </tr>
                <tr>
                    <td>12TH (Science Stream)</td>
                    <td>UP Board</td>
                    <td>85.2%</td>
                    <td>2015</td>
                </tr>
                <tr>
                    <td>Mechanical Engineering(B.TECH)</td>
                    <td>Giani Zail Singh Campus College of Engineering Technology(MRSPTU)</td>
                    <td>A Grade</td>
                    <td>2021</td>
                </tr>
                <tr>
                    <td>Full Stock Web Development</td>
                    <td>Webologix pvt ltd</td>
                    <td>A</td>
                    <td>2022</td>
                </tr>
                
                    </table>
                    </div>
  )
}

export default Qualification