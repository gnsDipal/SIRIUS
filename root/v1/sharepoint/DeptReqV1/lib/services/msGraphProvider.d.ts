import { MSGraphClientFactory } from "@microsoft/sp-http";
export interface IMSGraphInterface {
    getCurrentUserId(): Promise<any>;
    getUserId(userEmail: string): Promise<any>;
    createUsersChat(requesterId: string, birthdayPersonId: string): Promise<any>;
    sendMessage(chatId: string, chatMessage: any): Promise<any>;
}
export default function msGraphProvider(msGraphClientFactory: MSGraphClientFactory): Promise<IMSGraphInterface>;
//# sourceMappingURL=msGraphProvider.d.ts.map