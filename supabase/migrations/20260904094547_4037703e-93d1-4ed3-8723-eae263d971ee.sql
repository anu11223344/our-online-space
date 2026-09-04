CREATE TABLE public.consultation_enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 100),
  contact text NOT NULL CHECK (char_length(contact) BETWEEN 3 AND 255),
  preferred_contact_method text NOT NULL CHECK (preferred_contact_method IN ('email', 'phone')),
  service_interest text NOT NULL CHECK (service_interest IN ('individual', 'couple-family', 'group', 'psychological-astrology', 'workshops-training', 'training-supervision', 'not-sure')),
  session_preference text NOT NULL CHECK (session_preference IN ('online', 'in-person', 'either')),
  message text CHECK (message IS NULL OR char_length(message) <= 1000),
  consent_given boolean NOT NULL CHECK (consent_given = true),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT ALL ON public.consultation_enquiries TO service_role;

ALTER TABLE public.consultation_enquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role manages consultation enquiries"
ON public.consultation_enquiries
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS trigger
LANGUAGE plpgsql
SECURITY INVOKER
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER set_consultation_enquiries_updated_at
BEFORE UPDATE ON public.consultation_enquiries
FOR EACH ROW
EXECUTE FUNCTION public.set_updated_at();