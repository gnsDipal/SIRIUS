import * as React from 'react';
import styles from './RoomReservationPlatinum.module.scss';
import { IRoomReservationPlatinumProps } from './IRoomReservationPlatinumProps';
import { IRoomReservationPlatinumState } from './IRoomReservationPlatinumState';
import { FilterType } from '../../../controls/Filters/filterType';
import Filters from '../../../controls/Filters/Filters';
import FilterImage from '../../../controls/FilterImage/FilterImage';
import Calendar from '../../../controls/Calendar/Calendar';

export default class RoomReservationPlatinum extends React.Component<IRoomReservationPlatinumProps, IRoomReservationPlatinumState> {
  
  constructor(props:IRoomReservationPlatinumProps, state:IRoomReservationPlatinumState) { 
    super(props);
    
    this.state = {
      locationId: 0,
      areaId:0,
      buildingId: 0,
      sizeId: 0
    };
    this.EventKeySelectionHandler = this.EventKeySelectionHandler.bind(this);
  }

     // Get event once the all drop boxes have been selected. Get keys for all drop down here :)
    private EventKeySelectionHandler(locationId: number, areaId: number, buildingId:number, sizeId:number) {
    this.setState ({
      locationId: locationId,
      areaId: areaId,
      buildingId: buildingId,
      sizeId: sizeId
    });
  }

  private updatePropertyHandler(str: string) {
    this.props.updateProperty(str);
  }

  public render(): React.ReactElement<IRoomReservationPlatinumProps> {
    return (
      <div className={ styles.roomReservation }>
        <div className="ms-Grid" dir="ltr">
          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-u-sm6 block">
              <Filters 
                siteUrl= {this.props.siteUrl}
                context={this.props.context}
                locationListName= {this.props.locationListName}
                areaListName ={this.props.areaListName}
                categoryListName={this.props.categoryListName}
                masterListName={this.props.masterListName}
                calendarListName={this.props.calendarListName}
                filterType = {FilterType.Asset}
                EventKeySelection={this.EventKeySelectionHandler}
                />
            </div>
            <div className="ms-Grid-col ms-u-sm6 block">
              {this.state.sizeId <= 0 && <div>Image will be loaded for the selected options</div>}
              {this.state.sizeId > 0 &&
                <FilterImage
                  siteUrl= {this.props.siteUrl}
                  context={this.props.context}
                  masterListName={this.props.masterListName}
                  sizeId = {this.state.sizeId}
                ></FilterImage>
                }
            </div>
          </div>
        </div>
        <div className="ms-Grid" dir="ltr">
          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-u-sm12 block">
            {this.state.sizeId <= 0 && <div>Schedule will be loaded according to the selection</div>}
              {this.state.sizeId > 0 &&
                <Calendar 
                   title= {this.props.title}
                   siteUrl= {this.props.siteUrl}
                   locationListName= {this.props.locationListName}
                   areaListName = {this.props.areaListName}
                   categoryListName = {this.props.categoryListName}
                   masterListName = {this.props.masterListName}
                   calendarListName = {this.props.calendarListName}
                   list = {this.props.calendarListName}
                   filterType = {FilterType.Asset}
                   displayMode = {this.props.displayMode}
                   context ={ this.props.context}
                   eventStartDate = {this.props.eventStartDate}
                   eventEndDate = {this.props.eventEndDate}
                   updateProperty = {this.updatePropertyHandler}
                />
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
