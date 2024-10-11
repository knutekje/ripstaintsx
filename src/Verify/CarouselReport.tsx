'use client'

import React from 'react'
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
 
  Text,
  Container,
  Spinner,
  Input,
} from '@chakra-ui/react'
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
// And react-slick as our Carousel Lib
import Slider from 'react-slick'
import { useQuery } from '@tanstack/react-query'
import { Report } from './ReportList'

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
}

export default function CarouselReport() {
    const {data:reports, isLoading } = useQuery<Report[]>({
        queryKey: ["reports"],
        queryFn: async () => {
            try {
                const res = await fetch("http://localhost:5172/Report")
                const data = await res.json()
                return data
            } catch (error) {
                console.log(error)
            }
        }
    })
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null)
  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' })
  const side = useBreakpointValue({ base: '30%', md: '40px' })


  return (
       <Box position={'relative'} height={'600px'} width={'full'} overflow={'hidden'}>
          {/* CSS files for react-slick */}
          {isLoading ? <Spinner/> : <></>}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
              {reports?.map((report, index) => (
            
          <Box
            key={index}
            height={'6xl'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  backgroundColor={"AppWorkspace"}
                     /*  backgroundImage={`url(${card.desc})`} */
                          
                      
                  >
                {/* This is the block you need to change, to customize the caption */}
                    <Container size="container.lg" height="600px" position="relative" alignItems={"center"} justifyContent={"center"}>
                        <Stack
                            spacing={6}
                            w={'60%'}
                            maxW={'lg'}
                            position="absolute"
                            top="50%"
                            transform="translate(0, -50%)">
                            
                              <Input value={report.title}/>  {report.title}
                           
                            <Text fontSize={{ base: 'md', lg: 'lg' }} color="GrayText">
                                {report.description}
                            </Text>
                        </Stack>
                    </Container>
               
          </Box>
        ))}
      </Slider>
    </Box>
  )
}
