import * as React from "react";
import { DatePicker, DayOfWeek, IDatePickerStrings } from 'office-ui-fabric-react/lib/DatePicker';
import './DateFilter.less';
import { Label } from "office-ui-fabric-react/lib/Label";

export class DateFilter extends React.Component<{}, {}> {

    public render(): JSX.Element {
        return <div className="DateFilter">
            <Label className="DateFilter-StartDateLabel" >Select a start date:</Label>
            <DatePicker className="DateFilter-StartDatePicker" placeholder='Select a date...' />
            <Label className="DateFilter-EndDateLabel" >Select a end date:</Label>
            <DatePicker className="DateFilter-EndDatePicker" placeholder='Select a date...' />            
        </div>;
    }
}