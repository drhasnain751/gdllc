CREATE TABLE public.consultation_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL CHECK (char_length(name) BETWEEN 2 AND 100),
  company TEXT NOT NULL CHECK (char_length(company) BETWEEN 2 AND 200),
  email TEXT NOT NULL CHECK (char_length(email) <= 255),
  phone TEXT NOT NULL CHECK (char_length(phone) BETWEEN 7 AND 40),
  service_needed TEXT NOT NULL CHECK (service_needed IN ('Store Management', 'LLC Infrastructure', 'Joint Venture')),
  message TEXT NOT NULL CHECK (char_length(message) BETWEEN 10 AND 2000),
  status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'closed')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT ALL ON public.consultation_leads TO service_role;
ALTER TABLE public.consultation_leads ENABLE ROW LEVEL SECURITY;
CREATE INDEX consultation_leads_created_at_idx ON public.consultation_leads (created_at DESC);
COMMENT ON TABLE public.consultation_leads IS 'Consultation requests submitted through the public marketing site; accessible only to trusted server code.';