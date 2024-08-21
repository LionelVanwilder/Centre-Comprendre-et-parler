import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://dfeuymhvudzgziwqoxtk.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRmZXV5bWh2dWR6Z3ppd3FveHRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQyMzYxNzcsImV4cCI6MjAzOTgxMjE3N30.dYekd89pIdPrYGdlW8_XDqKW-Y_j2kO2hU_qgvR_tpU')