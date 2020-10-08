import React, { PureComponent } from 'react';
import {
    PieChart, Pie, Sector, Cell,
} from 'recharts';



export default class MainPieChart extends PureComponent {
    
    componentDidMount() {
        // debugger
        this.props.fetchQuestionData(2);
        // debugger
    }

    

    

    render() {
        // debugger

        if (!this.props.questionData.data) {
            return null;
        }
        const genderData = this.props.questionData.data.question.questionChoices.choiceA.demo.gender;
        
        const male = genderData["Male"];
        const female = genderData["Female"];
        const nonbinary = genderData["Non-Binary"];
        const other = genderData["Other"];
        const preferNotToID = genderData["Prefer-Not-To-Self-Id"]


        const data = [
            { name: 'Group A', value: male },
            { name: 'Group B', value: female },
            { name: 'Group C', value: nonbinary },
            { name: 'Group D', value: other },
            { name: 'Group E', value: preferNotToID }
        ];

        const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

        const RADIAN = Math.PI / 180;
        const renderCustomizedLabel = ({
            cx, cy, midAngle, innerRadius, outerRadius, percent, index,
        }) => {
            const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
            const x = cx + radius * Math.cos(-midAngle * RADIAN);
            const y = cy + radius * Math.sin(-midAngle * RADIAN);

            return (
                <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                    {`${(percent * 100).toFixed(0)}%`}
                </text>
            );
        };

        return (
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    cx={200}
                    cy={200}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {
                        data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                    }
                </Pie>
            </PieChart>
        );
    }
}