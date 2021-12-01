import React from 'react';
import { Image, Box, Text, HStack } from '@chakra-ui/react';
import PropTypes from "prop-types"
import { ChevronRightIcon } from "@chakra-ui/icons"

export default function EventTeaser({
    img = "https://magicyeti.us/600/400/*/",
    organizer = "Rylee Beahan",
    role = "Chef",
    dept = "College or Department",
    body = "Default Body Text"
}) {
    return (
        <Box >
            <Image src={img} h="400px" w="50vw" />
            <Text fontSize="3xl">{organizer}</Text>
            <Text fontSize="lg">{role}</Text>
            <HStack>
            <ChevronRightIcon />
            <Text fontSize="2xl">
                {dept}
            </Text>
            </HStack>

            <Text fontSize="xl">{body}</Text>

        </Box>
    )
}

EventTeaser.propTypes = {
    host: PropTypes.string.isRequired,
    dept: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
}