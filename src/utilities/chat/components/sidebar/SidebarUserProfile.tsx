/*
    We're going to mock client user data

        TODO! @mustajab-ikram design how to fetch next auth client data
*/

import { mockClientData } from "../../mockdata/mockclient";

export default function SidebarUserProfile() {
  return (
    <div className="flex space-x-3 px-4 py-6 text-lg font-semibold">
      <p>{mockClientData.clientName}</p>
      <p>{mockClientData.pronouns}</p>
    </div>
  );
}
