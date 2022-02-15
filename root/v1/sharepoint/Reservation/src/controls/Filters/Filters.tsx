import * as React from 'react';
import styles from './Filters.module.scss';
import { Dropdown } from 'office-ui-fabric-react';
import { IFilterProps } from './IFilterProps';
import { IFilterStates } from './IFilterState';
import { FilterType } from './filterType';
// import  RoomService  from '../../roomService';
import spRoomService from '../../services/spRoomService';

export default class Filters extends React.Component<IFilterProps, IFilterStates> {
    private spRoomService: spRoomService = null;
    constructor(props:IFilterProps, state:IFilterStates) { 
        super(props);
        this.state = {
            locations : [],
            selectedLocationKey : 0,
            areas : [],
            selectedAreaKey : 0,
            buildings : [],
            selectedBuildingKey : 0,
            size : [],
            selectedSizeKey : 0,
            errorMessage : ""
        };
        this.spRoomService = new spRoomService(this.props.context);
    }

    public componentDidMount() : void {
        this._getLocation();
    }

    private _getLocation = () => {
        this.spRoomService.getLocations(this.props.siteUrl, this.props.locationListName).then(res=>{
            this.setState({
                locations : res,
            });
         }).catch((error)=>{
            console.log("Error getting results from Loaction - " + error);
         });
    }
    
    private _getAreaBySelectedId = (obj) => { 
        // obj.selectedIndex = 0;
        // Reset the data once the Location get changed
        this.setState({
            areas : [],
            selectedAreaKey : 0,
            buildings : [],
            selectedBuildingKey : 0,
            size : [],
            selectedSizeKey : 0,
        });
        // this.props.locationListName
        this.spRoomService.getAreaBySelectedLocation(this.props.siteUrl, this.props.areaListName,'RoomLocation' , obj.key).then(res=>{
            this.setState({
                selectedLocationKey: obj.key,
                areas : res
            });
            this._notifyParentThatMyStateGetChanged(
                this.state.selectedLocationKey, 
                this.state.selectedAreaKey,
                this.state.selectedBuildingKey,
                this.state.selectedSizeKey
            );
         }).catch((error)=>{
            console.log("Error getting results from Area - " + error);
         });
    }

    private _getBuildingFloorBySelectedId = (obj) => {
        // Reset the data once the Location get changed
        this.setState({
            buildings : [],
            selectedBuildingKey : 0,
            size : [],
            selectedSizeKey : 0,
        });
        // this.props.areaListName
        this.spRoomService.getDataBySelectedArea(this.props.siteUrl, this.props.categoryListName,'RoomArea' , obj.key).then(res=>{
            this.setState({
                selectedAreaKey: obj.key,
                buildings : res
            });
            this._notifyParentThatMyStateGetChanged(
                this.state.selectedLocationKey, 
                this.state.selectedAreaKey,
                this.state.selectedBuildingKey,
                this.state.selectedSizeKey
            );
         }).catch((error)=>{
            console.log("Error getting results from Building - " + error);
         });
    }

    private _getSizeBySelectedId = (obj) => {
        this.setState({
            size : [],
            selectedSizeKey : 0,
        });
        // this.props.categoryListName
        this.spRoomService.getMasterDataBySelectedCategory(this.props.siteUrl, this.props.masterListName,'BuildingFloor' , obj.key).then(res=>{
           this.setState({
               selectedBuildingKey: obj.key,
               size : res
           });
           this._notifyParentThatMyStateGetChanged(
                this.state.selectedLocationKey, 
                this.state.selectedAreaKey,
                this.state.selectedBuildingKey,
                this.state.selectedSizeKey
            );
        }).catch((error)=>{
           console.log("Error getting results from Size - " + error);
        });
    }

    private _onChangeRoomSize = (e, obj) => { 
        this.setState({
            selectedSizeKey : obj.key
        });
        this._notifyParentThatMyStateGetChanged(
            this.state.selectedLocationKey, 
            this.state.selectedAreaKey,
            this.state.selectedBuildingKey,
            obj.key
            // this.state.selectedSizeKey
        );
    }

    private _notifyParentThatMyStateGetChanged(locationId: number, areaId: number, buildingId:number, sizeId:number){
        this.props.EventKeySelection (locationId, areaId, buildingId, sizeId);
    }

    public render(): React.ReactElement<IFilterProps> {
        return (
            <div className={ styles.filters }>
                <div className="ms-Grid" dir="ltr">
                    <div className="ms-Grid-row">
                        <div className="ms-Grid-col ms-u-sm12 block">
                            <Dropdown
                                options={this.state.locations}
                                selectedKey={this.state.selectedLocationKey}
                                placeholder= { this.props.filterType == FilterType.Asset ? "Select Asset Location" : "Select Room Location" }
                                onChange={(e, obj)=>this._getAreaBySelectedId(obj)}
                                className = {styles.dropDown}
                            />
                        </div>
                    </div>
                    <div className="ms-Grid-row">
                        <div className="ms-Grid-col ms-u-sm12 block">
                            <Dropdown
                                options={this.state.areas}
                                selectedKey={this.state.selectedAreaKey}
                                placeholder={ this.props.filterType == FilterType.Asset ? "Select Asset Area" : "Select Room Area" }
                                onChange={(e, obj)=>this._getBuildingFloorBySelectedId(obj)}
                                className = {styles.dropDown}
                            />
                        </div>
                    </div>
                    <div className="ms-Grid-row">
                        <div className="ms-Grid-col ms-u-sm12 block">
                            <Dropdown
                                options={this.state.buildings}
                                selectedKey={this.state.selectedBuildingKey}
                                placeholder={ this.props.filterType == FilterType.Asset ? "Select Asset Category" : "Select Room BuildingFloor" }
                                onChange={(e, obj)=>this._getSizeBySelectedId(obj)}
                                className = {styles.dropDown}
                            />
                        </div>
                    </div>
                    <div className="ms-Grid-row">
                        <div className="ms-Grid-col ms-u-sm12 block">
                            <Dropdown
                                options={this.state.size}
                                selectedKey={this.state.selectedSizeKey}
                                placeholder= { this.props.filterType == FilterType.Asset ? "Select Asset" : "Select Room Size" }
                                onChange={(e, obj)=>this._onChangeRoomSize(e, obj)}
                                className = {styles.dropDown}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}