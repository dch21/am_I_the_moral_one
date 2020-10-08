import React, { PureComponent } from 'react';
import {
    PieChart, Pie, Sector, Cell,
} from 'recharts';



export default class MainPieChart extends PureComponent {
    
    componentDidMount() {
        this.props.fetchQuestionData(this.props.questionNumber);
    }

    // componentWillUpdate(){
    //     this.props.fetchQuestionData(this.props.questionNumber)
    // }



    render() {

        if (!this.props.questionData.data) {
            return null;
        }
        const questionText = this.props.questionData.data.question.text
        const choiceAtext = this.props.questionData.data.question.choiceAText
        const choiceBtext = this.props.questionData.data.question.choiceBText
        const labels = Object.keys(this.props.questionData.data.question.questionChoices.choiceA.demo.gender)

        const genderDataA = this.props.questionData.data.question.questionChoices.choiceA.demo.gender;
        
        const maleA = genderDataA["Male"];
        const femaleA = genderDataA["Female"];
        const nonbinaryA = genderDataA["Non-Binary"];
        const otherA = genderDataA["Other"];
        const preferNotToIDA = genderDataA["Prefer-Not-To-Self-Id"]

        const genderDataB = this.props.questionData.data.question.questionChoices.choiceB.demo.gender;
        
        const maleB = genderDataB["Male"];
        const femaleB = genderDataB["Female"];
        const nonbinaryB = genderDataB["Non-Binary"];
        const otherB = genderDataB["Other"];
        const preferNotToIDB = genderDataB["Prefer-Not-To-Self-Id"]


        const data = [
            { name: 'Group A', value: maleA },
            { name: 'Group B', value: maleB },
            // { name: 'Group C', value: nonbinaryA },
            // { name: 'Group D', value: otherA },
            // { name: 'Group E', value: preferNotToIDA }
        ];

        const dataPrefer = [
            { name: 'Group A', value: preferNotToIDA },
            { name: 'Group B', value: preferNotToIDB },
            // { name: 'Group C', value: nonbinaryA },
            // { name: 'Group D', value: otherA },
            // { name: 'Group E', value: preferNotToIDA }
        ];

        const dataFemale = [
            { name: 'Group A', value: femaleA },
            { name: 'Group B', value: femaleB },
            // { name: 'Group C', value: nonbinaryA },
            // { name: 'Group D', value: otherA },
            // { name: 'Group E', value: preferNotToIDA }
        ];
        
        const dataNonBinary = [
            { name: 'Group A', value: nonbinaryA },
            { name: 'Group B', value: nonbinaryA },
            // { name: 'Group C', value: nonbinaryA },
            // { name: 'Group D', value: otherA },
            // { name: 'Group E', value: preferNotToIDA }
        ];

        const dataOther = [
            { name: 'Group A', value: otherA },
            { name: 'Group B', value: otherB },
            // { name: 'Group C', value: nonbinaryA },
            // { name: 'Group D', value: otherA },
            // { name: 'Group E', value: preferNotToIDA }
        ];

        const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#bada55',  '#92A0F2'];

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
            <div className="data-charts">
                <p>{questionText}</p>
                <p>Blue:{choiceAtext}</p>
                <p>Green:{choiceBtext}</p>


                    <p>{labels[0]}</p>
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

                <PieChart width={400} height={400}>
                    <Pie
                        data={dataFemale}
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

                <PieChart width={400} height={400}>
                    <Pie
                        data={dataPrefer}
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

                <PieChart width={400} height={400}>
                    <Pie
                        data={dataNonBinary}
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

                <PieChart width={400} height={400}>
                    <Pie
                        data={dataOther}
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
            </div>

        );
    }
}