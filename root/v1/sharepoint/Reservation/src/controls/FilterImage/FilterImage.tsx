import * as React from 'react';
import styles from './FilterImage.module.scss';
import { IFilterImageProps } from './IFilterImageProps';
import { IFilterImageStates } from './IFilterImageState';
import spRoomService from '../../services/spRoomService';

// debugger;
export default class FilterImage extends React.Component<IFilterImageProps, IFilterImageStates> {
    private spRoomService: spRoomService = null;
    constructor(props:IFilterImageProps, state:IFilterImageStates) { 
        super(props);
        this.state = {
            isLoading:true,
            selectedImage: '',
            errorMessage : ''
        };
        this.spRoomService = new spRoomService(this.props.context);
    }

    public componentDidMount() : void {
        this. _getRoomPhotoByPara(this.props.sizeId);
    }
    public componentDidUpdate(prevProps, prevState) : void {
        if(prevProps.sizeId !== this.props.sizeId) 
            this. _getRoomPhotoByPara(this.props.sizeId);

    }

    private _getRoomPhotoByPara(sizeId:number) {
        // debugger;
        this.spRoomService.getImageBySelectedMaster(this.props.siteUrl, this.props.masterListName, sizeId).then(res=>{
            this.setState({
                selectedImage : res,
                isLoading:false
            });
         }).catch((error)=>{
            this.setState({
                isLoading:false
            });
            console.log("Error getting results from Asset Photo - " + error);
         });
    }

    public render(): React.ReactElement<IFilterImageProps> {
        return (
            <div className={ styles.filterImage }>
                <div className="ms-Grid" dir="ltr">
                    <div className="ms-Grid-row">
                        <div className="ms-Grid-col ms-u-sm12 block">
                            {(this.state.selectedImage) &&
                            <img src={`${this.state.selectedImage}`} height="100%" width="100%" margin-top="15px"/>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}