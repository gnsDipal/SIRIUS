import { MSGraphClientFactory } from "@microsoft/sp-http";

export interface IMSGraphInterface {
    getCurrentUserId(): Promise<any>;
    getUserId(userEmail: string): Promise<any>;
    createUsersChat(requesterId: string, birthdayPersonId: string): Promise<any>;
    sendMessage(chatId: string, chatMessage: any): Promise<any>;
}
// debugger;
export default async function msGraphProvider(msGraphClientFactory: MSGraphClientFactory): Promise<IMSGraphInterface> {

    const msGraphClient = await msGraphClientFactory.getClient();
    
    //GET https://graph.microsoft.com/beta/users/{id}
    const getUserId = async (userEmail: string) => {
    
        let resultGraph = await msGraphClient.api(`/users/${userEmail}`).get();
        return resultGraph.id;
    };

    //Get the ID of user who is sending message
    const getCurrentUserId = async () => {
        let resultGraph = await msGraphClient.api(`me`).get();
        return resultGraph.id;
    };

    //Create channel between sender and receiver
    const createUsersChat = async (requesterId: string, birthdayPersonId: string) => {
        let body: any = {
            "chatType": "oneOnOne",
            "members": [
                {
                    "@odata.type": "#microsoft.graph.aadUserConversationMember",
                    "roles": ["owner"],
                    "user@odata.bind": `https://graph.microsoft.com/beta/users('${requesterId}')`
                },
                {
                    "@odata.type": "#microsoft.graph.aadUserConversationMember",
                    "roles": ["owner"],
                    "user@odata.bind": `https://graph.microsoft.com/beta/users('${birthdayPersonId}')`
                }
            ]
        };
        let resultGraph = await msGraphClient.api(`chats`).version("beta").post(body);
        return resultGraph.id;
    };

    //Send message to birthday person
    const sendMessage = async (chatId: string, chatMessage: any) => {
        let body = {
            "body": {
                "contentType": chatMessage.body.contentType,
                "content": chatMessage.body.content
            }
        };
        let resultGraph = await msGraphClient.api(`chats/${chatId}/messages`).version("beta").post(body);
        return resultGraph;
    };

    return { 
        getUserId,       
        sendMessage,
        createUsersChat,
        getCurrentUserId
    };
}