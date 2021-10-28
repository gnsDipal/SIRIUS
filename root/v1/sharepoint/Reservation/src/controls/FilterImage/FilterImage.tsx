import * as React from 'react';
import styles from './FilterImage.module.scss';
import { IFilterImageProps } from './IFilterImageProps';
import { IFilterImageStates } from './IFilterImageState';
import spRoomService from '../../services/spRoomService';

export default class FilterImage extends React.Component<IFilterImageProps, IFilterImageStates> {
    private spRoomService: spRoomService = null;
    constructor(props:IFilterImageProps, state:IFilterImageStates) { 
        super(props);
        this.state = {
            selectedImage: '',
            imagePaths: [],
            errorMessage : ""
        };
        this.spRoomService = new spRoomService(this.props.context);
    }

    public componentDidMount() : void {
        this. _getRoomPhotoByPara(this.props.locationId, this.props.areaId, this.props.buildingId, this.props.sizeId);
    }

    private _getRoomPhotoByPara(locationId:number, areaId:number, buildingId:number, sizeId:number) {
        this.spRoomService.getRoomImagesBySize(this.props.siteUrl, sizeId).then(res=>{
            this.setState({
                imagePaths : res,
            });
         }).catch((error)=>{
            console.log("Error getting results from Asset Photo - " + error);
         });
    }

    public render(): React.ReactElement<IFilterImageProps> {
        return (
            <div className={ styles.filterImage }>
                <div className="ms-Grid" dir="ltr">
                    <div className="ms-Grid-row">
                        <div className="ms-Grid-col ms-u-sm12 block">
                            {this.state.imagePaths.map(img => {
                                return <img src={`${img}`} height="100%" width="100%" className={this.state.selectedImage == img ? styles.selected:''} margin-top="15px"/>;
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}