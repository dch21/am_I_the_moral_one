import React, { PureComponent } from 'react';
import './homepage.scss'
import {
    PieChart, Pie, Sector, Cell,
} from 'recharts';



export default class MainPieChart extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            demo: "age"
        }

        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle(field) {

        this.setState({
            demo: field
        })
    }
    
    componentDidMount() {
        this.props.fetchQuestionData(this.props.questionNumber);
    }

    componentDidUpdate(prevProps){
        if (this.props.questionNumber !== prevProps.questionNumber) {
            this.props.fetchQuestionData(this.props.questionNumber)
        }
    }



    render() {
        // debugger
        const [age, ethnicity, gender, location, petChoice, religiousAffilation, politicalLeaning, education] = this.props.demo

        const targetDemo = this.state.demo

        if (!this.props.questionData.data) {
            return null
        }
        // debugger
        const questionText = this.props.questionData.data.question.text
        const choiceAtext = this.props.questionData.data.question.choiceAText
        const choiceBtext = this.props.questionData.data.question.choiceBText

        
        const labels = Object.keys(this.props.questionData.data.question.questionChoices.choiceA.demo[targetDemo])

        // Object.values(targetDataA)
        // [46, 20, 4, 54, 10]
        // [34, 23. 3, 23, 23]
        // [46, 34, 20, 23, 4, 3, 54, 23, 10, 23]

        // const genderDataA = this.props.questionData.data.question.questionChoices.choiceA.demo.gender;
        const targetDataA = this.props.questionData.data.question.questionChoices.choiceA.demo[targetDemo];
        const targetDataB = this.props.questionData.data.question.questionChoices.choiceB.demo[targetDemo];

        const targetDataAValues = Object.values(targetDataA);
        const targetDataBValues = Object.values(targetDataB);

        const demoGroup1A = targetDataAValues[0];
        const demoGroup2A = targetDataAValues[1];
        const demoGroup3A = targetDataAValues[2];
        const demoGroup4A = targetDataAValues[3];
        const demoGroup5A = targetDataAValues[4];
        const demoGroup6A = targetDataAValues[5];
        const demoGroup7A = targetDataAValues[6];
        const demoGroup8A = targetDataAValues[7];
        const demoGroup9A = targetDataAValues[8];

        const demoGroup1B = targetDataBValues[0];
        const demoGroup2B = targetDataBValues[1];
        const demoGroup3B = targetDataBValues[2];
        const demoGroup4B = targetDataBValues[3];
        const demoGroup5B = targetDataBValues[4];
        const demoGroup6B = targetDataBValues[5];
        const demoGroup7B = targetDataBValues[6];
        const demoGroup8B = targetDataBValues[7];
        const demoGroup9B = targetDataBValues[8];


        // const maleA = targetDataA[0];
        // const femaleA = targetDataA["Female"];
        // const nonbinaryA = targetDataA["Non-Binary"];
        // const otherA = targetDataA["Other"];
        // const preferNotToIDA = targetDataA["Prefer-Not-To-Self-Id"]

        // const genderDataB = this.props.questionData.data.question.questionChoices.choiceB.demo.gender;
        
        // const maleB = genderDataB["Male"];
        // const femaleB = genderDataB["Female"];
        // const nonbinaryB = genderDataB["Non-Binary"];
        // const otherB = genderDataB["Other"];
        // const preferNotToIDB = genderDataB["Prefer-Not-To-Self-Id"]


        const data = [
            { name: 'Group A', value: demoGroup1A },
            { name: 'Group B', value: demoGroup1B },
        ];

        const data2 = [
            { name: 'Group A', value: demoGroup2A },
            { name: 'Group B', value: demoGroup2B },
        ];

        const data3 = [
            { name: 'Group A', value: demoGroup3A },
            { name: 'Group B', value: demoGroup3B },
        ];
        
        const data4 = [
            { name: 'Group A', value: demoGroup4A },
            { name: 'Group B', value: demoGroup4B },
        ];

        const data5 = [
            { name: 'Group A', value: demoGroup5A },
            { name: 'Group B', value: demoGroup5B },
        ];

        const data6 = [
            { name: 'Group A', value: demoGroup6A },
            { name: 'Group B', value: demoGroup6B },
        ];
        
        const data7 = [
            { name: 'Group A', value: demoGroup7A },
            { name: 'Group B', value: demoGroup7B },
        ];
        
        const data8 = [
            { name: 'Group A', value: demoGroup8A },
            { name: 'Group B', value: demoGroup8B },
        ];

        const data9 = [
            { name: 'Group A', value: demoGroup9A },
            { name: 'Group B', value: demoGroup9B },
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
                <div className="filter-buttons">
                    <button onClick={() => this.handleToggle(age)}>Age</button>
                    <button onClick={() => this.handleToggle(ethnicity)}>Ethnicity</button>
                    <button onClick={() => this.handleToggle(gender)}>Gender</button>
                    <button onClick={() => this.handleToggle(location)}>Location</button>
                    <button onClick={() => this.handleToggle(petChoice)}>Pet Choice</button>
                    <button onClick={() => this.handleToggle(religiousAffilation)}>Religious Affiliation</button>
                    <button onClick={() => this.handleToggle(politicalLeaning)}>Political Leaning</button>
                    <button onClick={() => this.handleToggle(education)}>Education</button>
                </div>
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
                        data={data2}
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
                        data={data3}
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
                        data={data4}
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
                        data={data5}
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
                        data={data6}
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
                        data={data7}
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
                        data={data8}
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
                        data={data9}
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