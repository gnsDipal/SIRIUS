import * as React from 'react';
import styles from './AssetReservation.module.scss';
import { IAssetReservationProps } from './IAssetReservationProps';
import { IAssetReservationState } from './IAssetReservationState';
import { FilterType } from '../../../controls/Filters/filterType';
import Filters from '../../../controls/Filters/Filters';
import FilterImage from '../../../controls/FilterImage/FilterImage';
import Calendar from '../../../controls/Calendar/Calendar';
import { Logger, LogLevel} from "@pnp/logging";

export default class AssetReservation extends React.Component<IAssetReservationProps, IAssetReservationState> {
  constructor(props:IAssetReservationProps, state:IAssetReservationState) { 
    
    super(props);
    
    this.state = {
      locationId: 0,
      areaId:0,
      buildingId: 0,
      sizeId: 1,
    };
    this.EventKeySelectionHandler = this.EventKeySelectionHandler.bind(this);
    Logger.write("AssetReservation class triggered.", LogLevel.Info);
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

  private updatePropertyHandler() {
    this.props.updateProperty("");
  }

  public render(): React.ReactElement<IAssetReservationProps> {
    return (
      <div className={ styles.assetReservation }>
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
          <div className="ms-Grid-row">~
            <div className="ms-Grid-col ms-u-sm12 block">
            {this.state.sizeId > 0 &&
                <Calendar 
                   title= {this.props.title}
                   siteUrl= {this.props.siteUrl}
                   locationListName= {this.props.locationListName}
                   areaListName = {this.props.areaListName}
                   categoryListName = {this.props.categoryListName}
                   masterListName = {this.props.masterListName}
                   calendarListName = {this.props.calendarListName}
                   filterType = {FilterType.Asset}
                   displayMode = {this.props.displayMode}
                   context ={ this.props.context}
                   eventStartDate = {this.props.eventStartDate}
                   eventEndDate = {this.props.eventEndDate}
                   updateProperty = {this.updatePropertyHandler}
                   locationId={this.state.locationId}
                   areaId={this.state.areaId}
                   buildingId={this.state.buildingId}
                   sizeId={this.state.sizeId}
                />
            }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
