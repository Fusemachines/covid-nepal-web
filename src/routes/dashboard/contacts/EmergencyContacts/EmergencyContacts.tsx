import React, { useEffect, useState, FC } from 'react';
import { IFetchContactsAPIResponse, fetchEmergencyContactsAPI } from 'src/services/contacts';
import EmergencyContactItem from './EmergencyContactRecords';

const EmergencyContacts: FC<{}> = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [contactList, setContactList] = useState<IFetchContactsAPIResponse>({} as IFetchContactsAPIResponse);

  useEffect(() => {
    fetchEmergencyContacts();
  }, []);

  const fetchEmergencyContacts = async () => {
    try {
      const response: IFetchContactsAPIResponse = await fetchEmergencyContactsAPI();
      setContactList(response);
      setIsLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="px-5">
      <div className="info-list">
        {isLoaded && contactList.docs.map(contact => <EmergencyContactItem contact={contact} />)}
        <div className="info-item py-3 mt-2">
          <div className="font-16">Sukraraj Tropical And Infectious Disease Hospital</div>

          <div className="d-flex mt-3">
            <div className="col-5">1) Dr. Shrawan K. Mishra :</div>
            <div className="col-7">
              <span className="rounded bg-success px-3 py-1 mx-2 d-inline-block">
                <i className="mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="11.5" height="11.5" viewBox="0 0 11.5 11.5">
                    <path
                      id="Icon_material-call"
                      data-name="Icon material-call"
                      d="M4.063,6.727a9.678,9.678,0,0,0,4.21,4.21L9.679,9.532a.635.635,0,0,1,.652-.153,7.288,7.288,0,0,0,2.281.364.641.641,0,0,1,.639.639v2.23a.641.641,0,0,1-.639.639A10.86,10.86,0,0,1,1.75,2.389a.641.641,0,0,1,.639-.639H4.625a.641.641,0,0,1,.639.639A7.258,7.258,0,0,0,5.628,4.67a.641.641,0,0,1-.16.652L4.063,6.727Z"
                      transform="translate(-1.75 -1.75)"
                      fill="#ffffff"
                    />
                  </svg>
                </i>
                9851168220
              </span>
            </div>
          </div>

          <div className="d-flex mt-3">
            <div className="col-5">2) Dr. Ranjit Shah : </div>
            <div className="col-7">
              <span className="rounded bg-success px-3 py-1 mx-2 d-inline-block">
                <i className="mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="11.5" height="11.5" viewBox="0 0 11.5 11.5">
                    <path
                      id="Icon_material-call"
                      data-name="Icon material-call"
                      d="M4.063,6.727a9.678,9.678,0,0,0,4.21,4.21L9.679,9.532a.635.635,0,0,1,.652-.153,7.288,7.288,0,0,0,2.281.364.641.641,0,0,1,.639.639v2.23a.641.641,0,0,1-.639.639A10.86,10.86,0,0,1,1.75,2.389a.641.641,0,0,1,.639-.639H4.625a.641.641,0,0,1,.639.639A7.258,7.258,0,0,0,5.628,4.67a.641.641,0,0,1-.16.652L4.063,6.727Z"
                      transform="translate(-1.75 -1.75)"
                      fill="#ffffff"
                    />
                  </svg>
                </i>
                9872701465
              </span>
            </div>
          </div>

          <div className="d-flex mt-3">
            <div className="col-5">3) Mr. Rajesh K. Gupta :</div>
            <div className="col-7">
              <span className="rounded bg-success px-3 py-1 mx-2 d-inline-block">
                <i className="mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="11.5" height="11.5" viewBox="0 0 11.5 11.5">
                    <path
                      id="Icon_material-call"
                      data-name="Icon material-call"
                      d="M4.063,6.727a9.678,9.678,0,0,0,4.21,4.21L9.679,9.532a.635.635,0,0,1,.652-.153,7.288,7.288,0,0,0,2.281.364.641.641,0,0,1,.639.639v2.23a.641.641,0,0,1-.639.639A10.86,10.86,0,0,1,1.75,2.389a.641.641,0,0,1,.639-.639H4.625a.641.641,0,0,1,.639.639A7.258,7.258,0,0,0,5.628,4.67a.641.641,0,0,1-.16.652L4.063,6.727Z"
                      transform="translate(-1.75 -1.75)"
                      fill="#ffffff"
                    />
                  </svg>
                </i>
                9851239988
              </span>
            </div>
          </div>

          <div className="d-flex mt-3">
            <div className="col-5">4) Mr. Dinesh Thapa Magar : </div>
            <div className="col-7">
              <span className="rounded bg-success px-3 py-1 mx-2 d-inline-block">
                <i className="mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="11.5" height="11.5" viewBox="0 0 11.5 11.5">
                    <path
                      id="Icon_material-call"
                      data-name="Icon material-call"
                      d="M4.063,6.727a9.678,9.678,0,0,0,4.21,4.21L9.679,9.532a.635.635,0,0,1,.652-.153,7.288,7.288,0,0,0,2.281.364.641.641,0,0,1,.639.639v2.23a.641.641,0,0,1-.639.639A10.86,10.86,0,0,1,1.75,2.389a.641.641,0,0,1,.639-.639H4.625a.641.641,0,0,1,.639.639A7.258,7.258,0,0,0,5.628,4.67a.641.641,0,0,1-.16.652L4.063,6.727Z"
                      transform="translate(-1.75 -1.75)"
                      fill="#ffffff"
                    />
                  </svg>
                </i>
                9823168540
              </span>
              <small className="ml3">(Nights only)</small>
            </div>
          </div>

          <div className="d-flex mt-3">
            <div className="col-5">5) Mr. Naresh Thapa Magar :</div>
            <div className="col-7">
              <span className="rounded bg-success px-3 py-1 mx-2 d-inline-block">
                <i className="mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="11.5" height="11.5" viewBox="0 0 11.5 11.5">
                    <path
                      id="Icon_material-call"
                      data-name="Icon material-call"
                      d="M4.063,6.727a9.678,9.678,0,0,0,4.21,4.21L9.679,9.532a.635.635,0,0,1,.652-.153,7.288,7.288,0,0,0,2.281.364.641.641,0,0,1,.639.639v2.23a.641.641,0,0,1-.639.639A10.86,10.86,0,0,1,1.75,2.389a.641.641,0,0,1,.639-.639H4.625a.641.641,0,0,1,.639.639A7.258,7.258,0,0,0,5.628,4.67a.641.641,0,0,1-.16.652L4.063,6.727Z"
                      transform="translate(-1.75 -1.75)"
                      fill="#ffffff"
                    />
                  </svg>
                </i>
                9803152149
              </span>
              <small className="ml3">(Nights only)</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyContacts;
