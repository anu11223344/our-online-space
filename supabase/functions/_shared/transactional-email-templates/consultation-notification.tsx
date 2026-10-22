import * as React from 'npm:react@18.3.1'
import { Body, Container, Head, Heading, Html, Preview, Text, Hr } from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface Props {
  name?: string; contact?: string; preferredContactMethod?: string;
  sessionPreference?: string; serviceInterest?: string; message?: string; submittedAt?: string;
}

const Email = ({ name = 'Visitor', contact = '', preferredContactMethod = '', sessionPreference = '', serviceInterest = '', message = 'Not provided', submittedAt = '' }: Props) => (
  <Html lang="en"><Head /><Preview>New consultation enquiry from {name}</Preview>
    <Body style={main}><Container style={container}>
      <Text style={brand}>Inner Horizon Mental Well-Being</Text>
      <Heading style={heading}>New consultation enquiry</Heading>
      <Text><strong>Name:</strong> {name}</Text>
      <Text><strong>Email or phone:</strong> {contact}</Text>
      <Text><strong>Preferred contact method:</strong> {preferredContactMethod}</Text>
      <Text><strong>Session preference:</strong> {sessionPreference}</Text>
      <Text><strong>Service of interest:</strong> {serviceInterest}</Text>
      <Hr />
      <Text style={messageStyle}><strong>Message:</strong> {message}</Text>
      <Text><strong>Submission time:</strong> {submittedAt}</Text>
    </Container></Body>
  </Html>
)

export const template = {
  component: Email,
  subject: (data) => `New consultation enquiry - ${String(data.name || 'Visitor').replace(/[\r\n]/g, ' ')}`,
  displayName: 'Consultation enquiry notification',
  to: 'innerhorizoncare@gmail.com',
  previewData: { name: 'Example visitor', contact: 'visitor@example.com', preferredContactMethod: 'Email', sessionPreference: 'Online', serviceInterest: 'Individual therapy', message: 'I would like to enquire about availability.', submittedAt: '22 Oct 2026, 1:15 pm IST' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif', color: '#193957' }
const container = { padding: '28px 24px', maxWidth: '600px' }
const brand = { color: '#5D8378', fontSize: '15px' }
const heading = { color: '#193957', fontFamily: 'Georgia, serif', fontSize: '26px' }
const messageStyle = { whiteSpace: 'pre-wrap' as const }