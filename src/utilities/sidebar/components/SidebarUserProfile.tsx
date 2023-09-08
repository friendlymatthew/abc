/*
    We're going to mock client user data

        TODO! @mustajab-ikram design how to fetch next auth client data
*/

import { mockClientData } from "../mockdata/mockclient";

export default function SidebarUserProfile() {
  return (
    <div className="flex space-x-3 p-4">
      <p>{mockClientData.clientName}</p>
      <p>{mockClientData.pronouns}</p>
    </div>
  );
}
