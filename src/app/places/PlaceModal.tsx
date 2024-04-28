'use client'

import {UseDisclosureReturn} from "@nextui-org/use-disclosure";
import {Modal, ModalBody, ModalContent, ModalHeader} from "@nextui-org/modal";
import {Image} from "@nextui-org/react";

interface PlaceModalProps {
  disclosure: UseDisclosureReturn
}

export function PlaceModal(props: PlaceModalProps) {
  return (
    <Modal isOpen={props.disclosure.isOpen} onOpenChange={props.disclosure.onOpenChange} backdrop={"blur"}
           placement={"center"} className={"max-w-[85vw]"} scrollBehavior={"inside"}
           classNames={{
             base: "overflow-hidden",
             closeButton: "lg:bg-white z-10"
           }}>
      <ModalContent>

        <div className={"flex flex-col lg:flex-row overflow-y-scroll lg:overflow-y-hidden"}>
          <div className={"lg:basis-2/5 lg:flex lg:flex-col justify-end"}>

            <ModalHeader>Little Maru</ModalHeader>
            <ModalBody className={"prose scroll-m-0.5"}>
              <p>
                Little Maru is a Korean takeaway restaurant serving rice bowls with fried chicken and an assortment of
                korean sides dishes.
              </p>
              <p>Things to try at Little Maru:
                <ul className={"list-disc"}>
                  <li>Signature Rice Bowl</li>
                  <li>Chicken Rice Bowl</li>
                </ul>
                testing <br/>
                testing <br/>
                testing <br/>

                testing <br/>
                testing <br/>
                testing <br/>
                testing <br/>
                testing <br/>
                testing <br/>
                testing <br/>
                testing <br/>
                testing <br/>
                testing <br/>
                testing <br/>
                testing <br/>
                testing <br/>
                testing <br/>
                testing <br/>

              </p>
            </ModalBody>

            <div>
              <iframe
                width="100%"
                height="250px"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDyXQcaLDgUePV0l1EGgWcbGWHuwNRZObs
    &q=Little+Maru,Brisbane+AU">
              </iframe>
            </div>
          </div>
          <div className={"lg:basis-3/5 bg-blue-500"}>
            <Image
              radius={"none"}
              removeWrapper
              alt="Card example background"
              className="w-full h-full object-cover border-none z-0"
              src="https://img.restaurantguru.com/r3c3-Little-Maru-food.jpg"
            />
          </div>
        </div>
      </ModalContent>
    </Modal>
  )
}